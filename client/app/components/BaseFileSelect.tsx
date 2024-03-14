import { useCallback, useRef } from "react";
import { IconButton } from "@mui/material";
import { UploadApi, UploadApiTypes } from "@/services/api/upload";
import { PhotoApi } from "@/services/api/photos";

interface Props {
  onChange: (
    signedData: UploadApiTypes.SignedUrlResponse,
    name: string,
    file: File
  ) => void;
  setError: (error: string | undefined) => void;
  setLoading: (loading: boolean) => void;
  fileType?: "image";
  children?: React.ReactNode;
  disabled?: boolean;
  // setValue: (v: {
  //   signedData: UploadApiTypes.SignedUrlResponse;
  //   name: string;
  // }) => void;
  setFile: (file: File) => void;
}

const BaseFileSelect: React.FC<Props> = ({
  fileType = "image",
  setError,
  setLoading,
  onChange,
  children,
  disabled,
  // setValue,
  setFile,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleClick = useCallback(() => {
    if (disabled) return;
    if (inputRef.current && inputRef.current.files) {
      inputRef.current.value = "";
      inputRef.current?.click();
    }
  }, []);

  const onFileSelect = useCallback(async (file: File) => {
    if (!file) return;
    if (fileType !== "image") {
      setError("only images are allowed. please, upload an image");
      return;
    }
    if (!file.type.includes(fileType)) {
      setError(`Please upload ${fileType} file`);
      return;
    }

    // Replacing all the ()[] in the image because it will break the backgroundImage
    const updatedName = file?.name.replace(/[- )(]/g, "");

    try {
      const signedData = await UploadApi.createSignedUrl({
        key: updatedName,
        file,
      });

      setError(undefined);

      // setValue(value);
      onChange(signedData, updatedName, file);
      setFile(file);
      //  Whatever happens in on change should not be dependent on the completeion of setValue due to the asynchronous nature of setValue
    } catch (e) {
      setError(`Failed to upload ${updatedName}. please try again`);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <IconButton onClick={handleClick} disableFocusRipple disableRipple>
      {children}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={async (event) => {
          event.target.files && (await onFileSelect(event.target.files[0]));
        }}
        style={{ display: "none", width: 0, height: 0 }}
        multiple={false}
      />
    </IconButton>
  );
};

export default BaseFileSelect;

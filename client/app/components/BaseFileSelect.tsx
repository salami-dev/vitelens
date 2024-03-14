import { useCallback, useRef } from "react";
import { IconButton } from "@mui/material";

interface Props {
  onChange: (v: { url: string; name: string }) => void;
  setError: (error: string | undefined) => void;
  setLoading: (loading: boolean) => void;
  setFileName: (fileName: string) => void;
  setFile: (file: File) => void;
  fileType?: "image";
  children?: React.ReactNode;
  disabled?: boolean;
}

const BaseFileSelect: React.FC<Props> = ({
  fileType = "image",
  setError,
  setLoading,
  onChange,
  children,
  disabled,
  setFileName,
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

    // setFileName()
    // setLoading(true);

    // Replacing all the () in the image because it will break the backgroundImage using
    const updatedName = file?.name.replace(/[- )(]/g, "");
    setFileName(updatedName);
    setFile(file);
  }, []);

  return (
    <IconButton onClick={handleClick} disableFocusRipple disableRipple>
      {children}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={(event) => {
          event.target.files && onFileSelect(event.target.files[0]);
        }}
        style={{ display: "none", width: 0, height: 0 }}
        multiple={false}
      />
    </IconButton>
  );
};

export default BaseFileSelect;

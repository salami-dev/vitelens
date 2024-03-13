"use client";
import {useState} from 'react';
import { LoadingButton as Button } from '@mui/lab';
import BaseFileUpload from '@/components/BasefileUpload';
import BaseFileSelect from '@/components/BaseFileSelect';

const Action = () => {
    
    const [displayedError, setDisplayedError] = useState<string>();
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState<{ url: string; name: string }>();
    const [fileUrl, setFileUrl] = useState('');

    const handleOnChange = (v: { url: string; name: string }) => {
        setFileUrl(v.url);
        setValue(v);
      };

  return (
    <>
    <BaseFileUpload
    onChange={handleOnChange}
    setError={(e) => setDisplayedError(e)}
    setLoading={(v) => setLoading(v)}
  >
    
      
    {/* {value?.name ? value?.name :'No file selected'} */}
    <Button variant="outlined" loading={loading} color="inherit" sx={{ height: '100%', width: '7.6rem' }}>

      
      {value?.name ? value?.name :'No file selected'}
      {value?.name ? 'Change' : 'Upload'}
    </Button>
  </BaseFileUpload>


    LoadingButton as Button

    <BaseFileSelect />
    
    </>
  )
}

export default Action
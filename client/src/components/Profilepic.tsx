import React, { useState, useEffect } from 'react';

const ProfilePic: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);

    useEffect(() => {
        const savedImage = localStorage.getItem('profilePic');
        if (savedImage) {
            setPreview(savedImage);
        }
    }, []);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        const maxSize = 10 * 1024 * 1024; // 10MB
        const targetWidth = 320; // Target width in pixels
        const targetHeight = 320; // Target height in pixels

        if (file) {
            if (file.type !== 'image/jpeg') {
                alert('Please upload a .jpeg file');
                return;
            }

            if (file.size > maxSize) {
                alert('File size exceeds 2MB');
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                const result = reader.result as string;

                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = targetWidth;
                    canvas.height = targetHeight;
                    const ctx = canvas.getContext('2d');
                    if (ctx) {
                        ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
                        const resizedImage = canvas.toDataURL('image/jpeg');
                        setSelectedFile(file);
                        setPreview(resizedImage);
                        localStorage.setItem('profilePic', resizedImage);
                    }
                };
                img.src = result;
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (selectedFile) {
            console.log('File uploaded:', selectedFile);
        }
    };

    // you saved it to local storage dumb dumb -_- Upload it to what?
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" accept="image/jpeg" onChange={handleFileChange} />
                {preview && <img src={preview} alt="Profile Preview" />}
                {/* <button type="submit">Upload</button> */}
            </form>
        </div>
    );
};

export default ProfilePic;
import React, { useState } from "react";

import { Title } from "./components/Title";
import { UploadForm } from "./components/UploadForm";
import { ImageGrid } from "./components/ImageGrid";
import { Modal } from "./components/Modal";

export const App = () => {
    const [selectedImgUrl, setSelectedImgUrl] = useState(null);

    return (
        <div className="App">
            <Title />
            <UploadForm />
            <ImageGrid setSelectedImgUrl={setSelectedImgUrl} />
            {selectedImgUrl && (
                <Modal
                    selectedImgUrl={selectedImgUrl}
                    setSelectedImgUrl={setSelectedImgUrl}
                />
            )}
        </div>
    );
};

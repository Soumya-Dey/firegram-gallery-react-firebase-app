import React from "react";
import { motion } from "framer-motion";

import { useFirestore } from "../hooks/useFirestore";

export const ImageGrid = ({ setSelectedImgUrl }) => {
    const { docs } = useFirestore("images");

    return (
        <div className="img-grid">
            {docs &&
                docs.map((doc) => (
                    <motion.div
                        layout
                        className="img-wrap"
                        key={doc.id}
                        whileHover={{ opacity: 1 }}
                    >
                        <motion.img
                            src={doc.downloadUrl}
                            alt={doc.id}
                            onClick={() => setSelectedImgUrl(doc.downloadUrl)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        ></motion.img>
                    </motion.div>
                ))}
        </div>
    );
};

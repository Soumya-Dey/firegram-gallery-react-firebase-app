import React from "react";
import { motion } from "framer-motion";

export const Modal = ({ selectedImgUrl, setSelectedImgUrl }) => {
    const handleClick = (e) => {
        if (
            e.target.classList.contains("backdrop") ||
            e.target.classList.contains("cross-modal")
        ) {
            setSelectedImgUrl(null);
        }
    };

    return (
        <motion.div
            className="backdrop"
            onClick={handleClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <motion.img
                src={selectedImgUrl}
                alt="enlarged img"
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
            ></motion.img>
            <span className="cross-modal">+</span>
        </motion.div>
    );
};

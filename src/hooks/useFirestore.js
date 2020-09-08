import { useState, useEffect } from "react";

import { projectFirestore } from "../firebase/config";

export const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    // runs every time the collection value changes
    useEffect(() => {
        // listens to the firestore collection
        // and gives a snapshot of the collection
        // for the first time and then everytime
        // the collection gets changed
        // @Returns:  function to unsubscribe from the collection
        const unSub = projectFirestore
            .collection(collection)
            .orderBy("createdAt", "desc")
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach((doc) =>
                    documents.push({ id: doc.id, ...doc.data() })
                );
                setDocs(documents);
            });

        // this is a cleanup function that react will run when
        // a component using the hook unmounts
        return () => unSub();
    }, [collection]);

    return { docs };
};

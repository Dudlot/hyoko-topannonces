import React, { useEffect, useState } from "react";
import axios from "axios";

const Listing = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get("http://localhost:8000"); // Mettez à jour cette URL en fonction de votre route côté serveur
                setPosts(response.data);
            } catch(error) {
                console.error('Erreur lors de la récupération des données :', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <h1>Toutes les annonces</h1>

            {posts.map((post) => (
                <h3 key={post.id}>{post.title}</h3>
            ))}
            
        </div>
    );
};


export default Listing;
"use client"

import CollectionsGrid from "components/CollectionsGrid"

const CollectionsPage: React.FC = () => {

    return (
        <div className="relative mt-35">
        <div className="absolute top-4 left-4 z-10">
        </div>
    
        <main className="container mx-auto px-4 py-8">
            <h2 className="text-center text-2xl font-bold mb-6">Colecciones</h2>
            <CollectionsGrid />
        </main>
        </div>
    )
};

export default CollectionsPage;
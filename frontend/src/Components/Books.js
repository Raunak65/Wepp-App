import React from 'react';
import ProductCard from "./ProductCard";
import Stack from "@mui/material/Stack";

function Books() {
    return (
        <Stack direction="row" spacing={2}>
            <ProductCard
                alt="Book"
                src=""
                description="Hello There"
                title="Hi"
                price="$70"
            />
            <ProductCard
                alt="Book"
                src=""
                description="Hello There"
                title="Hi"
                price="$70"
            />
        </Stack>
    )
}

export default Books

import React from "react";
import type { ProductDisplayProps } from "../../types";

import { Grid, Typography, Button, Card, CardMedia, CardContent } from "@mui/material";

const ProductDisplay: React.FC<ProductDisplayProps> = ({
    product,
    showDescription = true,
    showStockStatus = true,
    onAddToCart,
    children,
}) => {
    return (
        <>
            <Grid container justifyContent={"center"}>
                <Grid size={{ xs: 12, md: 8 }}>
                    <Card elevation={9}>
                        <CardMedia
                            component="img"
                            height={250}
                            image={product.imageUrl}
                            alt={product.name}
                        />
                        <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                            <Typography fontWeight={'bold'} variant="h5" component={'h5'}>
                                {product.name}
                            </Typography>
                            <Typography fontWeight={'bold'} color="blue" variant="h6" component={'h6'}>
                                ${product.price.toFixed(2)}
                            </Typography>
                            {showDescription && (
                                <Typography variant="body2" color="text.secondary">
                                    {product.description}
                                </Typography>
                            )}
                            {showStockStatus && (
                                <Typography variant="body2" color={product.inStock ? "green" : "red"}>
                                    {product.inStock ? "In Stock" : "Out of Stock"}
                                </Typography>
                            )}
                            {children}
                            <Button
                                variant="contained"
                                fullWidth={true}
                                onClick={() => onAddToCart?.(product.id)}
                                color="primary"
                                disabled={!product.inStock}
                            >
                                Add to Cart
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid >
        </>
    )
}
export default ProductDisplay;
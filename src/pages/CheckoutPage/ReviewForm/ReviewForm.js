import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

const Review = ({ checkoutToken, shippingData }) => {
    // console.log('shipping data', shippingData.vat);

    return (
        <div>
            <Typography variant="h6" gutterBottom>
                Order summarry
                <List disablePadding>
                    {checkoutToken.live.line_items.map((product) => (
                        <ListItem style={{ padding: '5px 0' }} key={product.name}>
                            <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
                            <Typography variant="body2">{product.line_total.formatted_with_symbol}</Typography>
                        </ListItem>

                        // if (shippingData.vat || shippingData.vat.length > 0) {
                        //     return (
                        //         <ListItem style={{ padding: '5px 0' }} key={product.name}>
                        //             <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
                        //             <Typography variant="body2">{product.line_total.formatted_with_symbol}</Typography>
                        //         </ListItem>
                        //     );
                        // } else {
                        //     // product.price.raw = product.price.raw + product.price.raw * 0.21;
                        //     // product.line_total.raw = product.line_total.raw + product.line_total.raw * 0.21;
                        //     return (
                        //         <ListItem style={{ padding: '5px 0' }} key={product.name}>
                        //             <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
                        //             <Typography variant="body2">{`€${product.price.raw} (include 21% VAT)`}</Typography>
                        //         </ListItem>
                        //     );
                        // }
                    ))}
                    <ListItem style={{ padding: '10px 0 2px 0' }}>
                        <ListItemText primary="VAT (21%)" />
                        <Typography variant="subtitle1">{`€${checkoutToken.live.tax.amount.raw}`}</Typography>
                    </ListItem>

                    <ListItem style={{ padding: '0px 0 2px 0' }}>
                        <ListItemText primary="Shipping Cost" />
                        <Typography variant="subtitle1">{`€${shippingData.shippingCost}`}</Typography>
                    </ListItem>

                    <ListItem style={{ padding: '0 0 5px 0' }}>
                        <ListItemText primary="Total" />
                        <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
                            {/* {checkoutToken.live.subtotal.formatted_with_symbol} */}
                            {/* {`€${checkoutToken.live.total.raw + shippingData.shippingCost}`} */}
                            {`€${checkoutToken.live.total.raw}`}
                        </Typography>
                    </ListItem>
                </List>
            </Typography>
        </div>
    );
};

export default Review;

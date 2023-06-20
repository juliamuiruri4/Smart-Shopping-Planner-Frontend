import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';


var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() +1).padStart(2, '0');
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

// use landing-page-illustration4.png for the image
export default function PriceTag() {
  return (
    <Card variant="outlined" sx={{ width: 320 }}>
      <div>
        <Typography level="h3" fontSize="md" sx={{ mb: 0.5 }}>
          Shopping Summary
        </Typography>
        <Typography level="body2">{today}</Typography>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src="https://i.pinimg.com/474x/b2/29/d4/b229d4531b370362e6a7398bca609f5d.jpg"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body3">Total quantity</Typography>
          <Typography fontWeight="lg">
            23 items
          </Typography>
        </div>
        <Button
          variant="solid"
          size="sm"
          color="primary"
          aria-label="Let's shop"
          sx={{ ml: 'auto'}}
        >
          Shop
        </Button>
        <div>
          <Typography level="body3">Total shopping cost</Typography>
          <Typography fontWeight="lg">
            KES. 
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}

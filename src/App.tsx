import { AlertBox } from './components/AlertBox/AlertBox'
import UserProfileCard from './components/UserProfileCard/UserProfileCard'
import ProductDisplay from './components/ProductDisplay/ProductDisplay'
import { CssBaseline, Container } from '@mui/material'
import './App.css'
import type { Product, User } from './types'

function App() {
  const user: User = {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Software Engineer',
    avatarUrl: 'https://i.redd.it/l6ufe939ji7a1.png'
  };

  const product: Product = {
    id: '1',
    name: 'Wireless Headphones',
    price: 199.99,
    description: 'High-quality wireless headphones with noise cancellation.',
    imageUrl: 'https://images.pexels.com/photos/28920288/pexels-photo-28920288/free-photo-of-modern-white-wireless-headphones-on-gray-surface.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    inStock: true
  }

  return (
    <>
      <CssBaseline />
      <Container sx={{ marginTop: '10%' }}>
        <AlertBox
          type="success"
          message="Your profile has been updated successfully!"
          onClose={() => alert('Alert closed!')}
        >
          <p>You can now continue using the application.</p>
        </AlertBox>
        <br />
        <UserProfileCard user={user} onEdit={(id) => alert(`User id is ${id}`)}>Last login: 2 hours ago</UserProfileCard>
        <br />
        <ProductDisplay
          product={product} onAddToCart={(productId) => alert(`Added product with id ${productId} to cart`)}
        />
      </Container >
    </>
  )
}

export default App

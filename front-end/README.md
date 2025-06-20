# GoMorocco - Morocco Travel Explorer

GoMorocco is a travel application focused on exploring Morocco's beautiful cities, attractions, and experiences.

## Features

### User Authentication
- Sign up, login, and logout functionality
- JWT-based authentication
- Profile management with avatar uploads

### Explore Morocco
- Discover destinations, experiences, and accommodations
- Search and filter options
- Detailed view for each item

### Save Favorite Items
The app allows users to save items for later viewing:

1. **How to Save Items**:
   - While browsing the Explore page, each item card has a heart icon in the top-right corner
   - Click on the heart icon to save an item to your favorites
   - A toast notification will confirm when an item is saved
   - You need to be logged in to save items

2. **View Your Saved Items**:
   - Access your saved items from the bottom navigation bar by clicking "Saved"
   - Or navigate to your profile page and select the "Saved Items" tab
   - Your saved items are stored and synchronized with your account

3. **Remove Saved Items**:
   - To remove a saved item, click on the heart icon again (it will be filled if the item is saved)
   - You can also remove saved items from your profile page or saved items page

4. **Saved Items in Profile**:
   - Your profile page shows your saved items in a dedicated tab
   - This provides a quick way to access all your favorite Morocco destinations

## Development

### Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```

### Technologies Used

- Next.js for frontend
- Express.js for backend API
- Redux for state management
- Tailwind CSS for styling
- JWT for authentication 
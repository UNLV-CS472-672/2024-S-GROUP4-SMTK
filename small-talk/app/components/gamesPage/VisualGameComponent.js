import React, { useState, useEffect } from 'react';

// ai-gen start (ChatGPT-3.5, 2)
// used ai for documentation and match the format as other pages
export default function VisualGameComponent({ gameDataPath }) {
  // State to hold menu items and the selected item
  const [gameItems, setGameItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  // Fetch menu data when gameDataPath changes
  useEffect(() => {
    // Dynamic import for JSON data based on passed prop
    import(`../../data/gameData/${gameDataPath}`).then(data => {
        setGameItems(data.default);
    });
  }, [gameDataPath]); // Reload data when gameDataPath changes

  // Function to select or deselect an item
  const selectItem = (itemId) => {
    // Toggle selection: deselect if the same item is clicked again
    setSelectedItem(selectedItem === itemId ? null : itemId);
  };

  // Function to confirm the order
  const confirm = () => {
    alert("Your Game is Loading and will be Opening soon!");
    setSelectedItem(null); // Reset selection after confirming the game
  };

  return (
    // Render menu items and a confirm game button if an item is selected
    <div className="game-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {gameItems.map((item) => (
        <div 
          key={item.id} 
          className={`game-item border rounded-lg overflow-hidden shadow-lg cursor-pointer ${selectedItem === item.id ? 'bg-blue-800 text-white' : 'bg-white text-gray-900'}`}
          onClick={() => selectItem(item.id)}
        >
          {/* Render item image, name info button */}
          <img src={item.imgPath} alt={item.name} className="game-item-img w-full h-48 object-cover"/>
          <div className="p-4">
            <h3 className="text-lg font-bold">{item.name}</h3>
          </div>
        </div>
      ))}
      {/* Render confirm order button if an item is selected */}
      {selectedItem && (
        <button 
          className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
          onClick={confirm}
        >
          Confirm
        </button>
      )}
    </div>
  );
}
// ai-gen end
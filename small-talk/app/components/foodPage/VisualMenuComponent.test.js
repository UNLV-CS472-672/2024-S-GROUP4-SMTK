import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import VisualMenuComponent from './VisualMenuComponent';

jest.mock('../../data/foodData/breakfastMenu.json', () => [
  { id: 1, name: 'Pancakes', description: 'Fluffy pancakes', imgPath: '/img/pancakes.jpg', nutritionalInfo: '500 kcal' },
], { virtual: true });

describe('VisualMenuComponent', () => {
  beforeAll(() => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterAll(() => {
    window.alert.mockRestore();
  });

  beforeEach(() => {
    render(<VisualMenuComponent menuDataPath="breakfastMenu.json" />);
  });

  it('loads and displays menu items', async () => {
    const pancakes = await screen.findByText('Pancakes');
    expect(pancakes).toBeInTheDocument();
  });

  it('toggles selection of a menu item', async () => {
    const item = await screen.findByText('Pancakes');
    fireEvent.click(item);
    expect(item.closest('.menu-item')).toHaveClass('bg-blue-800 text-white');
    fireEvent.click(item);
    expect(item.closest('.menu-item')).not.toHaveClass('bg-blue-800 text-white');
  });

  it('displays nutritional information without toggling selection', async () => {
    const item = await screen.findByText('Pancakes');
    const nutriButton = await screen.findByText('Nutritional Info');
    fireEvent.click(nutriButton);
    expect(item.closest('.menu-item')).not.toHaveClass('bg-blue-800 text-white');
    expect(window.alert).toHaveBeenCalledWith('500 kcal');
  });

  it('displays and triggers order confirmation when an item is selected', async () => {
    const item = await screen.findByText('Pancakes');
    fireEvent.click(item);
    const confirmButton = await screen.findByText('Confirm Order');
    expect(confirmButton).toBeInTheDocument();
    fireEvent.click(confirmButton);
    expect(window.alert).toHaveBeenCalledWith('Your food is being prepared and will be on the way soon!');
  });
});

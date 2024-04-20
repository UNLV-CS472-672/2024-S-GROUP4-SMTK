/**
 * ProfileDropdown.js is a component used in TopBar that displays a dropdown when clicking on the profile icon.
 * This dropdown contains redirects to the Profile, Settings, and Logout pages.
 * 
 * @param isVisible - A state that determines if a dropdown is visible
 * 
 * = DropdownItem =
 * - DropdownItem is a function that acts as a template to map buttons into the dropdown menu using the passed
 *   parameters.
 * 
 * - @param redirect - The redirect path for the button
 * - @param imgSrc - Location of image for button
 * - @param altText - Alt Text to display if image is not available
 * - @param itemText - Text to display with button
 * - @param imageClass - className style to use for image
 * - @param textClass - className style to use in text
 */
import Link from 'next/link';

const DropdownItem = ({ redirect, imgSrc, altText, itemText, imageClass, textClass }) => {
    return (
        <li className="flex items-center text-m text-gray-700 hover:bg-gray-100 text-left p-3">
            <Link href={ redirect }>
                <div className="flex items-center">
                    <img src={ imgSrc } alt={ altText } className={ imageClass }/>
                    <a className={ textClass }>{ itemText }</a>
                </div>
            </Link>
        </li>
    )
}

const ProfileDropdown = ({ isVisible }) => {
    if(!isVisible) return null;

    const itemList = [
        { redirect: '/profile', imgSrc: '/img/profile-icon.png', altText: 'Profile', itemText: 'Profile', imageClass: 'w-8 ml-2 md:w-6', textClass: 'ml-4'},
        { redirect: '/setting', imgSrc: '/img/setting-icon.png', altText: 'Settings', itemText: 'Settings', imageClass: 'w-10 ml-1 md:w-8', textClass: 'ml-3'},
        { redirect: '/', imgSrc: '/img/logout-icon.png', altText: 'Logout', itemText: 'Logout', imageClass: 'w-10 ml-1 md:w-8', textClass: 'ml-3'}
    ]

    return (
        <div className="absolute bg-white right-0 mt-2 w-screen md:w-48 md:rounded-lg md:mt-4 md:mr-8 py-2">
            <ul className="list-none">
                {itemList.map((item, index) => (
                    <DropdownItem key={index} {...item}/>
                ))}
            </ul>
        </div>
    );
};

export default ProfileDropdown;
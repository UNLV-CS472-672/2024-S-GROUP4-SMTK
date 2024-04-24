/**
 * ThemeOptions is a function that acts as a template to map the radio button options of the themes and displays
 * a preview of the colors each theme would display.
 * 
 * @param theme - defines which button and preview is to be displayed
 * @param themeClass - className style to be used for radio buttons
 * @param previewClass - className style to use for preview
 * @param imgSrc - contains the directory to the icon that will be matched with the theme
 * @param isChecked - boolean that defines what the default button selected is
 */
import React from 'react';

const ThemeOptions = ({ theme, themeClass, previewClass, imgSrc, isChecked, toggleSelectedTheme }) => {
    return(
        <div className="grid">
            <div className={ themeClass }>
                {/* Theme Option based on passed values */}
                <input id={ theme } type="radio" name="status" defaultChecked={ isChecked } 
                    onChange={() => toggleSelectedTheme(previewClass)}
                />
                <label for={ theme } className="ml-2">{ theme }</label>
                {/* Preview of theme based on passed values */}
                <div className={`flex items-center w-auto rounded-lg p-3 mx-5 border-4 border-slate-400 ${ previewClass } `}>
                    <img className="size-10 mr-2" src={ imgSrc } alt={ theme }/>
                    <p>This is the color of { theme }.</p>
                </div>
            </div>
        </div>
    )
}

const SettingsTheme = ({ layoutTheme, toggleSelectedTheme, toggleLayout }) => {
    // Contains data to be used in ThemeOptions
    const themeList = [
        { theme: 'Dark Theme', previewClass: 'bg-slate-800 text-white', imgSrc: '/img/icons/moon-tab.png', isChecked: true },
        { theme: 'Light Theme', previewClass: 'bg-white text-black', imgSrc: '/img/icons/sun-tab.png', isChecked: false }
    ]

    return (
        <div className={`grid rounded-lg m-3 p-3 mb-0 ${ layoutTheme }`}>
            <h1 className={`text-xl col-span-2 rounded border-b-4 mb-2 border-slate-400`}>Select Theme</h1>
            {themeList.map((item, index) => (
                <ThemeOptions key={index} toggleSelectedTheme={toggleSelectedTheme} {...item}/>
            ))}
            <div className="justify-items-start mt-2 ml-5">
                <button className="rounded-lg bg-green-500 hover:bg-green-700 px-3 py-1" onClick={ toggleLayout }>Save</button>
            </div>
        </div>
    )
}

export default SettingsTheme;
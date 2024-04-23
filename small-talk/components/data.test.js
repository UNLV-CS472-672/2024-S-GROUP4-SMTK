import Tabs from './data.js';
//ai-gen start (ChatGPT-4, 2)
describe('Tabs array', () => {
    it('should contain the correct number of tabs', () => {
        expect(Tabs.length).toBe(8);
    });

    it('should contain the correct properties for each tab', () => {
        for (let tab of Tabs) {
            expect(tab).toHaveProperty('name');
            expect(tab).toHaveProperty('slug');
            expect(tab).toHaveProperty('color');
        }
    });

    it('should contain the correct values for the "Home" tab', () => {
        const homeTab = Tabs.find(tab => tab.name === 'Home');
        expect(homeTab).toEqual({
            name: 'Home',
            slug: '/homepage',
            color: 'from-cyan-400 to-sky-500',
            imgSrc: '/img/logo-no_font.png'
        });
    });

});
//ai-gen end

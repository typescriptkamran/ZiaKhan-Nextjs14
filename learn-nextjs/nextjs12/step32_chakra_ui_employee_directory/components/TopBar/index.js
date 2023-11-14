"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
const icons_1 = require("@chakra-ui/icons");
function TopBar() {
    const { colorMode, toggleColorMode } = (0, react_1.useColorMode)();
    const ColorModeIcon = colorMode === 'light' ? icons_1.SunIcon : icons_1.MoonIcon;
    return (<react_1.Box width="100%" padding="3" backgroundColor="twitter.500">
            <react_1.Box maxWidth="container.xl" margin="auto">
                <react_1.Button aria-label="UI Theme" leftIcon={<ColorModeIcon />} onClick={toggleColorMode} size="xs" marginRight="10" borderRadius="sm" backgroundColor={(0, react_1.useColorModeValue)('twitter.50', 'twitter.500')}>
                    Toggle theme
                </react_1.Button>
            </react_1.Box>
        </react_1.Box>);
}
exports.default = TopBar;

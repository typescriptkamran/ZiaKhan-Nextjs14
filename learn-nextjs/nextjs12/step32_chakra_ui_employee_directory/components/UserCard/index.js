"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = __importDefault(require("next/link"));
const react_1 = require("@chakra-ui/react");
const UserCard = (props) => {
    return (<link_1.default href={`/user/${props.username}`} passHref>
            <a>
                <react_1.VStack spacing="4" borderRadius="md" boxShadow="xl" padding="5" backgroundColor={(0, react_1.useColorModeValue)('twitter.50', 'twitter.500')}>
                    <react_1.Center>
                        <react_1.Avatar size="xl" src={props.avatar}/>
                    </react_1.Center>
                    <react_1.Center>
                        <react_1.Box textAlign="center">
                            <react_1.Text fontWeight="bold" fontSize="xl">
                                {props.first_name} {props.last_name}
                            </react_1.Text>
                            <react_1.Text fontSize="xs"> {props.job_title}</react_1.Text>
                        </react_1.Box>
                    </react_1.Center>
                </react_1.VStack>
            </a>
        </link_1.default>);
};
exports.default = UserCard;

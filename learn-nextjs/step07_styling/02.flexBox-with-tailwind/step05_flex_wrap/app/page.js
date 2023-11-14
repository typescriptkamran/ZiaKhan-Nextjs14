"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const image_1 = __importDefault(require("next/image"));
const google_1 = require("next/font/google");
const inter = (0, google_1.Inter)({ subsets: ['latin'] });
function Home() {
    return (<div className="container flex justify-around flex-wrap">
  <div className="team-profile">
    <image_1.default src="https://images.pexels.com/photos/7242908/pexels-photo-7242908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150" className="team-img" width={150} height={150} alt="image"/>
    <h3>Alexa Kardi</h3>
    <p>Founder and CEO</p>
  </div>
  <div className="team-profile">
    <image_1.default src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150" className="team-img" width={150} height={150} alt="image"/>
    <h3>Tavell Monroe</h3>
    <p>Web Developer</p>
  </div>
  <div className="team-profile">
    <image_1.default src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150" className="team-img" width={150} height={150} alt="image"/>
    <h3>Adale Smith</h3>
    <p>Marketing Specialist</p>
  </div>
  <div className="team-profile">
    <image_1.default src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=300" className="team-img" width={150} height={150} alt="image"/>
    <h3>Thomas Mason</h3>
    <p>UX Designer</p>
  </div>
    </div>);
}
exports.default = Home;

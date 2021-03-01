import './App.scss';
import Content from "./components/Content"
import myDatas from "./assets/settings.json"

const App = () => {

 console.log(myDatas.data[1].headline);
 
let myData = [

        {
          headline: "ABOUT MII",
          title: "ABOUT",
          color: "#0F528C",
          description: "Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien. Lorem Ipsum har været standard fyldtekst siden 1500-tallet, hvor en ukendt trykker sammensatte en tilfældig spalte for at.",
          more: "More text in ABOUT"
        },
        {
          headline: "WHAAATTTT",
          title: "WHAT",
          color: "#2182BF",
          "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
          more: "More text in WHAT"
        },
        {
          headline: "CONTACTO",
          title: "CONTACT",
          color: "#D9AD29",
          description: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham",
          more: "More text in CONTACT"
        }
       
      ]

return <Content 
items={myData} 
/>;
  
};

export default App;
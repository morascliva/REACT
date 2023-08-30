// import React from 'react'
import React from "react";

// export default function Array() {
  //   const fruits=['apple','orange','mango','kiwi'];
  //     let n=1;
  //     const mapping= fruits.map((item=><h2>{n++}{item}</h2>))
  //   const mapping= <ol>{fruits.map((item=><h2><li>{item}</li></h2>))}</ol>
  // const mapping= fruits.map((item,i)=><h2>{++i}{item}</h2>)

  // const people = [
  //   { name: "Cliva", age: 30, email: "cliva@123.com" },
  //   { name: "Moras", age: 25, email: "moras@67.com" },
  //   { name: "Rhea", age: 35, email: "rhea@12345.com" },
  // ];

    //   return (
    // <div>
    //      <h1 style={{ backgroundColor: 'blue', color: "aliceblue" }}> Array Function Start</h1>
          {/* <h1>{fruits[0]}</h1>
         <h1>{fruits[1]}</h1>
         <h1>{fruits[2]}</h1>  */}
//          <h2>{mapping}</h2>
//          <table border={2}>
//             <tr>
//                 <th>S1 No.</th>
//                 <th> Fruit Name</th>
//             </tr>
            
//              {fruits.map((item,index)=>{
//                 return(
//                     <tr>
//                         <td>{++index} </td>
//                         <td>{item}</td>
//                         </tr>
//                 )
//              })}   
            
//          </table>
//     </div>
//   )
// }







  

  // const mapping = (
  //   <ol>
  //     {" "}
  //     {fruits.map((item) => (
  //       <li>{item}</li>
  //     ))}
  //   </ol>



  // );

  // return (
  //   <div>

      


  //     <h1 style={{ backgroundColor: "bisque", color: "brown" }}>Array Start</h1>

      {/* <h3>{fruits}</h3> */}

      {/* <h1>{mapping}</h1> */}
      {/* <table border={2}>
        <tr>
          <th>SI no</th>
          <th> Name</th>
          <th> age</th>
          <th> email
            
          </th>
        </tr> */}
        {/* {fruits.map((item, index) => {
          return (
            <tr>
              <td>{++index}</td>
              <td>{item}</td>
            </tr> */}

 {/* {
  people.map((person, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.email}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
       */}


      

       export default function Arrays(props) {
         // const fruits = ["apple", "banana", "orange", "mango"];
         
         const people = [
           { name: "Cliva", age: 30, email: "clv@123.com" ,address:"kadri",
           marks:{ Maths:" ",
             Science:88,
             Social_Science:" ",
             Kannada:97,
             Hindi:" ",
             English:94,
           }},
       
       
           { name: "Rhea", age: 25, email: "rhea@67.com" ,address:"mangalore",
           marks:{ Maths:" ",
             Science:70,
             Social_Science:90,
             Kannada:" ",
             Hindi:" ",
             English:84,
           }
         },
       
       
           { name: "Ruth", age: 35, email: "ruth@kannan12.com", address:"manglore",
           marks:{ Maths:" ",
             Science:" ",
             Social_Science:" ",
             Kannada:87,
             Hindi:80,
             English:" ",
           } },
       
       
       
         ];
         
      
         const allMarksKeys = Array.from(
           new Set(
             people.map((person) => Object.keys(person.marks)).flat()
           )
         );
       
       
       
         
       
       
         return (
           <div>
             <h1 style={{ backgroundColor: "red", color: "white" }}>{props.title} Start</h1>
       
             {/* <h3>{fruits}</h3> */}
       
             {/* <h1>{mapping}</h1> */}
             <table border={2}>
               <tr>
                 <th>SI no</th>
                 <th> Name</th>
                 <th> age</th>
                 <th> email</th>
                 <th> address</th>
                 {allMarksKeys.map((key) => (
                     <th key={key}>{key}</th>
                   ))}
                 
               </tr>
           
       
       {people.map((person, index) => {
                 return (
                   <tr key={index}>
                     <td>{index + 1}</td>
                     <td>{person.name}</td>
                     
                     <td>{person.age}</td>
                     <td>{person.email}</td>
                     <td>{person.address}</td>
                     {allMarksKeys.map((key) => (
                       <td key={key}>{person.marks[key] === " " ? "no marks" : person.marks[key]}</td>
                     ))}
       
       
                   </tr>
                 );
               })}
             </table>
           </div>
         );
       }


import React from "react";: This line imports the React library, which is necessary for writing React components.

export default function Arrays(props) {: This line starts the definition of a React functional component named Arrays. It accepts a props object as an argument.

The code defines an array named people containing objects with information about different people, including their names, ages, emails, addresses, and marks in various subjects.

const allMarksKeys = Array.from(...);: This line creates an array called allMarksKeys that contains unique keys from all the people's marks objects. It uses the Set data structure to collect all keys and then converts it back to an array using Array.from.

The return statement marks the beginning of the JSX code that will be rendered by the component.

<h1 style={{ backgroundColor: "red", color: "white" }}>{props.title} Start</h1>: This JSX element renders an <h1> heading with a red background and white text color. The text content of the heading is retrieved from the props.title property.

<table border={2}>: This starts the definition of an HTML table with a border attribute set to 2, indicating that the table should have visible borders.

Inside the table, a <tr> element is used to create a table row for the header.

{allMarksKeys.map((key) => (<th key={key}>{key}</th>))}: This line uses the map function to iterate over the allMarksKeys array and creates a <th> element for each subject key. These <th> elements form the header cells of the table.

After the header row, there's a loop that iterates through the people array using the map function. For each person object, it creates a table row (<tr>) to display their information.

{people.map((person, index) => {: This line starts the loop over the people array. It uses the map function, which passes each person object and its index to the subsequent code block.

<td>{index + 1}</td>: This cell displays the serial number of the person, calculated as index + 1.

<td>{person.name}</td>: This cell displays the name of the person.

<td>{person.age}</td>: This cell displays the age of the person.

<td>{person.email}</td>: This cell displays the email address of the person.

<td>{person.address}</td>: This cell displays the address of the person.

{allMarksKeys.map((key) => (<td key={key}>{person.marks[key] === " " ? "no marks" : person.marks[key]}</td>))}: This line uses another map function to iterate over the allMarksKeys array. For each subject key, it creates a table cell (<td>) to display the corresponding marks from the person's marks object. If the mark is " ", it displays "no marks".

The </tr> tag closes the row for the current person.

The }); closes the loop that iterates over the people array.

The </table> tag closes the table.

The </div> tag closes the enclosing <div> element that wraps the entire JSX code.

Overall, this code defines a React component that renders a table displaying information about people and their marks in different subjects. The component receives a props object, which should include a title property to be displayed in the heading of the table.


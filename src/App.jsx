import "./App.css";
import contactList from "./contacts.json";
import { useState } from 'react'


function App() {
  const [contacts, setContacts] = useState(contactList)

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>

        {contacts.map((contact) => {
          return (
            <tr key={contact}>
              <img className="photo" src={contact.pictureUrl}></img>
              <th>{contact.name}</th>
              <th>{contact.popularity}</th>
              {contact.wonOscar ? <th>🏆</th> : <th></th>}
              {contact.wonEmmy ? <th>🌟</th> : <th></th>}
            </tr>
          )
        })}

      </table>
    </div>
  );
}

export default App;

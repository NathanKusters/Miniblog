import styles from "./CreatePost.module.css";

import { useState } from "react";
import { useNavigate} from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";

const CreatePost = () => {

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setformError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  }


  return (
    <div className={styles.create_post}>
        <h2>Criar Post</h2>
        <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Título:</span>
            <input 
              type="text"
              name="title"
              required
              placeholder="Um bom título"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </label>
          <label>
            <span>URL da imagem:</span>
            <input 
              type="text"
              name="image"
              required
              placeholder="Insira uma imagem que represente seu post"
              onChange={(e) => setImage(e.target.value)}
              value={image}
            />
          </label>
          <label>
            <span>Conteúdo:</span>
            <textarea 
              name="body"
              required
              placeholder="Insira o conteúdo do post"
              onChange={(e) => setBody(e.target.value)}
              value={body}
            />
          </label>
          <label>
            <span>Tags:</span>
            <input 
              type="text"
              name="tags"
              required
              placeholder="Insira as tags separadas por vírgula"
              onChange={(e) => setTags(e.target.value)}
              value={tags}
            />
          </label>
          <button className="btn">Fazer Post</button>
        
        </form>
    </div>
  )
}

export default CreatePost
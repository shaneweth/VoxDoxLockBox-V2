import React from 'react';
import "./Form.css";

class Form extends React.Component {
  render() {
    return (
        <div className="uploadForm">
            <form action="/api/projects" enctype="multipart/form-data" method="POST">
                <div className="row">
                <h2>Upload Form</h2>
                </div>

        <div className="row">
            <label for="title">
            <h3>title</h3>
            </label>
            <input type="text" name="title" />
        </div>


      <div className="row">
        <label for="description">
          <h3>description</h3>
        </label>
        <input type="text" name="description" />

      </div>
      <hr />
      <div className="row" id="fileUpload">
        <br />
        <input type="file" name="myFile" className="fileInput" />
        <input className="submitBtn" type="submit" value="send" />
      </div>
    </form>
  </div>
  )
}
}

export default Form;
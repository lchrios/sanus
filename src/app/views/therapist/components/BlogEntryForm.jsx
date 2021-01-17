import React, { Component } from "react";
import { RichTextEditor, Breadcrumb } from "app/components/index";
import {
  Button,
  Icon
} from "@material-ui/core";
class BlogEntryForm extends Component {
  state = {
    content: `<h1>Iknelia | Crea tu propio post</h1><p><a href="http://localhost:3000/dashboard/analytics" target="_blank">en Iknelia</a><p>`
  };

  handleContentChange = contentHtml => {
    this.setState({
      content: contentHtml
    });
  };

  render() {
    return (
      <div className="m-sm-30">
        <div  className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "Forms", path: "/forms" },
              { name: "Editor" }
            ]}
          />
        </div>
        <RichTextEditor
          content={this.state.content}
          handleContentChange={this.handleContentChange}
          placeholder="Escribe aquí..."
        />
        <Button 
          className="uppercase"
          size="large"
          color="primary" 
          variant="contained" 
          type="submit"
          onClick={() => {
            console.log(this.state.content)
          }}
          >
          <Icon>send</Icon>
          <span className="pl-8 capitalize">Publicar</span>
        </Button>
      </div>
    )
  }
}

export default BlogEntryForm;

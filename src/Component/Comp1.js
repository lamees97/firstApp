import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

export default class Comp1 extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <List>
          {this.props.data.map((item, index) => {
            if (item.status === "Inbox") {
              return (
                <div style={{ backgroundColor: "lightgray" }}>
                  <ListItem alignItems="flex-start" key={index}>
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src={`./images/${item.Image}`} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={`${item.SName}`}
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            color="textPrimary"
                          ></Typography>
                          {/* {item.Message} */}
                        </React.Fragment>
                      }
                    />

                    <button onClick={() => this.props.deletedEmail(index)}>
                      <DeleteIcon />
                    </button>
                    <button onClick={() => this.props.ImportantEmail(index)}>
                      <FavoriteBorderIcon />
                    </button>
                  </ListItem>
                  <hr />
                </div>
              );
            }
          })}
        </List>
      </div>
    );
  }
}

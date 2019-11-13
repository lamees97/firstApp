import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PanToolIcon from "@material-ui/icons/PanTool";
import MenuIcon from "@material-ui/icons/Menu";
import EmailIcon from "@material-ui/icons/Email";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Comp1 from "./Component/Comp1";
import Comp2 from "./Component/Comp2";
import Comp3 from "./Component/Comp3";
import Comp4 from "./Component/Comp4";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import StarIcon from "@material-ui/icons/Star";
import "./App.css";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
export default class App extends React.Component {
  state = {
    selectedPage: "Comp1",
    status: true,
    style1: { height: 60, marginLeft: 100, display: "flex" },
    emailData: [
      {
        SName: "Ahmed",
        // Message: "Hello ",
        Image: "ahmed.png",
        status: "Inbox"
      },
      {
        SName: "George",
        // Message: "Hi, how are u?",
        Image: "george.png",
        status: "Inbox"
      },
      {
        SName: "Gillian",
        // Message: "Hello dddddgggg",
        Image: "gillian.png",
        status: "Inbox"
      },
      {
        SName: "Hania",
        // Message: "Good Morning",
        Image: "hania.png",
        status: "Inbox"
      },
      {
        SName: "Mariam",
        // Message: "Good Morning",
        Image: "mariam.png",
        status: "Inbox"
      },
      {
        SName: "Robert",
        // Message: "Good Morning",
        Image: "robert.png",
        status: "Inbox"
      }
    ]
  };

  handleDelete = Index => {
    const temp = this.state.emailData;
    temp[Index].status = "Trash";
    this.setState({ emailData: temp });
  };

  handleRestore = Index => {
    const temp = this.state.emailData;
    temp[Index].status = "Inbox";
    this.setState({ emailData: temp });
  };

  handleDrawer = () => {
    this.setState({ status: !this.state.status });
  };

  handleChanges = text => {
    this.setState({ selectedPage: text });
  };

  handleImportant = Index => {
    const temp = this.state.emailData;
    temp[Index].status = "Important";
    this.setState({ emailData: temp });
  };

  render() {
    return (
      <div>
        <CssBaseline />
        <AppBar>
          <div style={this.state.style1}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawer}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                Persistent Drawer
              </Typography>
            </Toolbar>
          </div>
        </AppBar>
        <nav style={{ marginLeft: 300 }} aria-label="mailbox folders">
          <div>
            <Drawer variant="persistent" anchor="left" open={this.state.status}>
              <div />
              <div style={{ textAlign: "right" }}>
                <IconButton onClick={this.handleDrawer}>
                  <ChevronLeftIcon />
                </IconButton>
              </div>
              <Divider />
              <List style={{ height: 150 }}>
                {["Inbox", "Trash", "Important", "Spam"].map((text, index) => (
                  <ListItem
                    button
                    key={text}
                    onClick={() => this.handleChanges(text)}
                  >
                    <ListItemIcon>
                      {text === "Inbox" ? (
                        <InboxIcon />
                      ) : text === "Trash" ? (
                        <DeleteSweepIcon />
                      ) : text === "Important" ? (
                        <StarIcon />
                      ) : (
                        <EmailIcon />
                      )}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </div>
          <Divider />
        </nav>
        <main style={{ marginLeft: 160 }}>
          <div style={{ marginTop: 80 }} />
          {this.state.selectedPage === "Inbox" ? (
            <Comp1
              data={this.state.emailData}
              deletedEmail={this.handleDelete}
              ImportantEmail={this.handleImportant}
            />
          ) : this.state.selectedPage === "Trash" ? (
            <Comp2
              data={this.state.emailData}
              restoredEmail={this.handleRestore}
              deletedEmail={this.handleDelete}
            />
          ) : this.state.selectedPage === "Important" ? (
            <Comp3
              data={this.state.emailData}
              handleImportant={this.handleImportant}
              deletedEmail={this.handleDelete}
            />
          ) : this.state.selectedPage === "Spam" ? (
            <Comp4 />
          ) : null}
        </main>
      </div>
    );
  }
}

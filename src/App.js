import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Container, Table, Search, Label, Menu, Grid, Feed, Icon, List} from 'semantic-ui-react';

function App() {
  return (
    <div>
      <br/>
      <Container>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='2' textAlign='right'>
                <Search placeholder='Search Document' />
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Header>
            <Table.Row textAlign='center'>
              <Table.HeaderCell>
                Nama Dokumen
              </Table.HeaderCell>
              <Table.HeaderCell>
                Jenis File
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Label content='Panduan Belajar Javascript' ribbon />
              </Table.Cell>
              <Table.Cell textAlign='center'>
                PDF
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                Panduan Belajar CSS
              </Table.Cell>
              <Table.Cell textAlign='center'>
                PDF
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                Panduan Belajar React JS
              </Table.Cell>
              <Table.Cell textAlign='center'>
                PDF
              </Table.Cell>
            </Table.Row>
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='2'>
                <Menu pagination floated='right'>
                  <Menu.Item as='a' icon='chevron left'/>
                  <Menu.Item as='a' content='1'/>
                  <Menu.Item as='a' content='2'/>
                  <Menu.Item as='a' content='3'/>
                  <Menu.Item as='a' content='4'/>
                  <Menu.Item as='a' icon='chevron right'/>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
        <br/>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={8}>
              <Feed>
                <Feed.Event>
                  <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                  <Feed.Content>
                    <Feed.Summary>
                      <Feed.User>Anton</Feed.User> added you as a friend
                      <Feed.Date> 3 hours ago</Feed.Date>
                    </Feed.Summary>
                    <Feed.Meta>
                      <Feed.Like>
                        <Icon name='like'/> 4 likes
                      </Feed.Like>
                    </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>
                <Feed.Event>
                  <Feed.Label icon='pencil'/>
                  <Feed.Content>
                    <Feed.Summary>
                      You Submitted a new post to the page
                    </Feed.Summary>
                    <Feed.Meta>
                      <Feed.Date>
                        3 days ago
                      </Feed.Date>
                    </Feed.Meta>
                    <Feed.Extra Text>
                      Saya belajar pemograman
                    </Feed.Extra>
                    <Feed.Meta>
                      11 Likes
                    </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>
                <Feed.Event>
                  <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/helen.jpg'/>
                  <Feed.Content>
                    <Feed.Date content='4 days ago'/>
                    <Feed.Summary>
                      David added 2 new images
                    </Feed.Summary>
                    <Feed.Extra images>
                      <img src='https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png' alt='Niomic' />
                      <img src='https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png' alt='ReactJS'/>
                    </Feed.Extra>
                    <Feed.Meta>
                      <Feed.Like icon='like' /> 2 Likes
                    </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </Grid.Column>
            <Grid.Column width={4}>
              <h2>Website Terkait</h2>
              <List>
                <List.Item icon='linkify' content={<a href='google.com'>Google</a>}/>
                <List.Item icon='linkify' content={<a href='facebook.com'>Facebook</a>}/>
                <List.Item icon='linkify' content={<a href='semantic-ui.com'>Semantic UI</a>}/>
                <List.Item icon='linkify' content={<a href='niomic.com'>Niomic</a>}/>
                <List.Item icon='linkify' content={<a href='reactjs.org'>React</a>}/>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
//import AnimateCC, { GetAnimationObjectParameter } from "react-adobe-animate";
import ReactDOM from 'react-dom';

import {
  FlexBox,
  Heading,
  SpectacleLogo,
  UnorderedList,
  CodeSpan,
  OrderedList,
  ListItem,
  FullScreen,
  Progress,
  Appear,
  Slide,
  Deck,
  Text,
  Grid,
  Box,
  Image,
  CodePane,
  MarkdownSlide,
  MarkdownSlideSet,
  Notes,
} from 'spectacle';

import { theme } from '../themes/theme';
import { template } from '../templates/template';
import presentation1 from '../../configurations/presentation1.json';


export default class PresentationDeck extends Component {
    constructor(props) {
        super(props);
        this.state = {presentationName: presentation1};
        this.store = this.props.store;
      }
    
    componentDidMount() {
      this.unsubscribe=this.store.subscribe(()=>{this.onStoreChange()});
      this.mounted=true;
      this.onStoreChange();
    }

    onStoreChange() {
      if (this.mounted) {
        let state=this.store.getState();
        this.setState({
          ...state
        });
      }
    }

    render () {
      let slides = [];
      let presentationJson = this.state.presentationName;
      let currentTheme = presentationJson.theme;
      let currentTemplate = presentationJson.template;
      let slidesStructure = presentationJson.slides;
      for (let prop in slidesStructure) {
        if (slidesStructure[prop].type === "html") {
          slides.push(
            <Slide backgroundColor="none" key={prop}>
              <Box marginLeft="200px">
                <iframe src={slidesStructure[prop].src} width="100%" height="600px" ></iframe>
              </Box>
            </Slide>
          )
        } else {
          slides.push(
            <Slide backgroundColor="primary" key={prop}>
              <Box marginLeft="200px">
                <Image src={slidesStructure[prop].src}></Image>
              </Box>
            </Slide>
          )
        }
      }

      return(
        <Deck theme={theme[currentTheme]} template={template[currentTemplate]}>
          {slides}
        </Deck>
      )
    }
  }
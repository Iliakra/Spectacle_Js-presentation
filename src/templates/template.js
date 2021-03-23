import React, { Component } from 'react';
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


export const template = {

    "template1":() => (
      <FlexBox
          justifyContent="space-between"
          position="absolute"
          bottom={0}
          width={1}
        >
          <Box padding="0 1em" marginLeft="100px">
            <FullScreen />
          </Box>
          <Box padding="1em">
            <Progress />
          </Box>
        </FlexBox>
    ),

    "template2":() => (
        <FlexBox
            justifyContent="space-between"
            position="absolute"
            bottom={0}
            width={1}
          >
          <Box padding="0 1em" marginLeft="100px">
            <FullScreen />
          </Box>
          <Box padding="1em">
            <Progress />
          </Box>
        </FlexBox>
      ),
    
  };
import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const { title, artist, image, thumbnail_image, url } = album;
    const { thumbnailContainerStyle,
         thumbnailStyle,
          imageStyle,
           headerTextStyle,
            headerContentStyle } = styles;
 return (
     <Card>
         <CardSection>
             <View style={thumbnailContainerStyle}>
                 <Image 
                 style={thumbnailStyle}
                 source={{ uri: thumbnail_image }} 
                 />
             </View>
             <View style={headerContentStyle}>
              <Text style={headerTextStyle}>{title}</Text>
              <Text>{artist}</Text>
             </View>
         </CardSection>

         <CardSection>
            <Image style={imageStyle} source={{ uri: image }} />
         </CardSection>

         <CardSection>
             <Button onPress={() => Linking.openURL(url)}>
              Buy {title}
             </Button>
         </CardSection>
     </Card>

 );
};
const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifycontent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifycontent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;

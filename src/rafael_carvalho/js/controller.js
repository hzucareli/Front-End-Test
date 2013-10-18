var feed = angular.module('feed', []);
 
feed.controller('FeedList', function FeedList($scope) {
  $scope.posts = [
      {'author': 'Fernando'
       ,'avatar': 'images/image.jpg'
       ,'text':'Lorem Ipsum is simply dummy text of'
       ,'imagePost': 'images/image.jpg'
       ,'linkTitle': 'titulo do post'
       ,'link': 'http://bilgow.com.br'
       ,'textPost':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'     
       ,'userAvatarComment': 'images/image.jpg'
       ,'userNameComment': 'Fulano'
       ,'userTextComment': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'      
           
     },
     
     {'author': 'Pessoa'
      ,'avatar': 'images/image.jpg'
      ,'text':'Lorem Ipsum is simply dummy text of'
      ,'imagePost': 'images/image.jpg'
      ,'linkTitle': 'titulo do post'
      ,'link': 'http://bilgow.com.br'
      ,'textPost':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s'
      ,'userAvatarComment': 'images/image.jpg'
      ,'userNameComment': 'Fulano'
      ,'userTextComment': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'           
    }
  ];
});

feed.controller('Fotos', function Fotos($scope) {
  $scope.friends = [
      {'name': 'Fernando'
       ,'avatar': 'images/image.jpg'
       ,'link': '/user/fernando'
     },  
     
     {'name': 'Fernando3'
      ,'avatar': 'images/image.jpg'
      ,'link': '/user/fernando3'
     },
     
     {'name': 'Fernando4'
      ,'avatar': 'images/image.jpg'
      ,'link': '/user/fernando4'
     },
     
     {'name': 'Fernando5'
      ,'avatar': 'images/image.jpg'
      ,'link': '/user/fernando5'
     },
  ];
});
feed.controller('Following', function Following($scope) {
  $scope.followers= [
      {'name': 'Fernando'
       ,'avatar': 'images/image.jpg'
       ,'link': '/user/fernando'
     },  
     
     {'name': 'Fernando3'
      ,'avatar': 'images/image.jpg'
      ,'link': '/user/fernando3'
     },
     
     {'name': 'Fernando4'
      ,'avatar': 'images/image.jpg'
      ,'link': '/user/fernando4'
     },
     
     {'name': 'Fernando5'
      ,'avatar': 'images/image.jpg'
      ,'link': '/user/fernando5'
     },
  ];
});

feed.controller('News', function News($scope) {
  $scope.news = [
      {'highlight': 'Pellentesque a ipsum leo.'
       ,'text': 'Vivamus vitae tellus ac mauris pharetra scelerisque. Fusce vel ligula elementum, pulvinar sapien ut, pellentesque felis.'
       
     }  
     
  ];
});
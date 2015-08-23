angular.module('Victor.deAndres.Me', ['ui.bootstrap'])

  /**
  /*
  /* Directiva para calcular la altura de la ficha de resumen para coincidir con la tecnica
  /*
  */
  .directive('calcResumeCardHeight', ['$timeout', function (timer) {
    return {
      link: function (scope, elem, attrs, ctrl) {
        var calcHeight = function () {
          var elementHeight = jQuery('.TechCard').css('height');
          if ( parseInt(elementHeight) === 0 ) {
            elementHeight = jQuery('.ResumeCard').css('height');
          };
          if ( elementHeight != undefined && parseInt(elementHeight) > 0 ) {
            var resumeCards = jQuery('.ResumeCard');
            for ( var idx = 0; idx < resumeCards.length ; idx++ ){
              var elementName = '.ResumeCard#' + resumeCards[idx].id;
              jQuery(elementName).css('height', elementHeight);
            }
          }
        }
        timer(calcHeight, 0);
      }
    }
  }])

  /**
  /*
  /* Controlador pantalla modal 
  /*
  */
  .controller('ModalInstanceCtrl', function ($scope, $modalInstance) {

    $scope.close = function () {
      $modalInstance.close();
    };
  })

  /**
  /*
  /* Controlador lista proyectos
  /*
  */
  .controller('ProjectListCtrl', function ($scope, $modal) {

    $scope.projects = [
      {
        'id': 'Card1',
        'name': 'LOREM IPSU 1',
        'database': 'SQLServer + MongoDb',
        'view' : 'HTML5 + AngularJS + Bootstrap',
        'server' : 'NodeJS + .Net (C#)',
        'connection' : 'WebService + MsETL',
        'tools' : 'JenkinsIC',
        'summary' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus id nunc sit amet placerat. Maecenas tempus sem non odio bibendum, ut laoreet urna ullamcorper. Nunc feugiat, est rhoncus ornare finibus, libero ex posuere libero, fermentum dictum erat risus nec neque.'
      },{ 
        'id': 'Card2',
        'name': 'LOREM IPSU 2',
        'database': 'SQLServer + MySQL',
        'view' : 'HTML5 + JQuery',
        'server' : 'PHP5 + .Net (c#)',
        'connection' : 'WebService',
        'tools' : 'Symfony2',
        'summary' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus id nunc sit amet placerat. Maecenas tempus sem non odio bibendum, ut laoreet urna ullamcorper. Nunc feugiat, est rhoncus ornare finibus, libero ex posuere libero, fermentum dictum erat risus nec neque.'
      },{
        'id': 'Card3',
        'name': 'LOREM IPSU 3',
        'database': 'SQLServer + MongoDb',
        'view' : 'HTML5 + AngularJS + Bootstrap',
        'server' : 'NodeJS + .Net (C#)',
        'connection' : 'WebService + MsETL',
        'tools' : 'JenkinsIC',
        'summary' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus id nunc sit amet placerat. Maecenas tempus sem non odio bibendum, ut laoreet urna ullamcorper. Nunc feugiat, est rhoncus ornare finibus, libero ex posuere libero, fermentum dictum erat risus nec neque.'
      }
    ];

    $scope.projectSlides = [];

    function setCurrentProjectSlides (index) {
      $scope.projectSlides = [];
      $scope.projectSlides.push($scope.projects[index]);
      if ( index + 1 >= $scope.projects.length ) {
        index = -1;   
      }
      $scope.projectSlides.push($scope.projects[index + 1]);
    }

    $scope.currentIndex = 0;
    setCurrentProjectSlides(0);

    $scope.setCurrentSlideIndex = function (index) {
      $scope.currentIndex = index;
    };

    $scope.isCurrentSlideIndex = function (index) {
     return $scope.currentIndex === index;
    };

    $scope.prevSlide = function () {
      $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.projects.length - 1;
      setCurrentProjectSlides($scope.currentIndex);
    };  

    $scope.nextSlide = function () {
      $scope.currentIndex = ($scope.currentIndex < $scope.projects.length - 1) ? ++$scope.currentIndex : 0;
      setCurrentProjectSlides($scope.currentIndex);
    };

    $scope.openModal = function (size, template){
      var modalInstance = $modal.open({
        templateUrl: template,
        controller: 'ModalInstanceCtrl',
        animation: false,
        size: size
      });
    }

  })
;






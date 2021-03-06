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
  .controller('ModalInstanceController', ['$scope', function ($scope, $modalInstance) {

    $scope.close = function () {
      $modalInstance.close();
    };

  }])

  /**
  /*
  /*
  /* Controlador lista proyectos
  /* Nota. Definicion del controlador para poder que funcione al minimizar
  /* Original: .controller('ProjectsController', function ($scope, $modal) {
  /*
  */
  .controller('ProjectsController', ['$scope', '$http', '$modal', function ($scope, $http, $modal) {

    $http.get('json/project.data.json').success (function(data){
      $scope.projects = data;
      $scope.projectSlides = [];
      setCurrentProjectSlides(0);
    });

    function setCurrentProjectSlides (index) {
      $scope.projectSlides = [];
      $scope.projectSlides.push($scope.projects[index]);
      if ( index + 1 >= $scope.projects.length ) {
        index = -1;   
      }
      $scope.projectSlides.push($scope.projects[index + 1]);
    }

    $scope.currentIndex = 0;

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
        controller: 'ModalInstanceController',
        animation: false,
        size: size
      });
    }

  }])

  /*
  /* Controlador validacion formulario de contacto
  /*
  */
  .controller('ContactFormController', ['$scope', '$http', function($scope, $http){
    $scope.submit = function(form) {

      $scope.submitted = true;

      
      if (form.$invalid) {
        return;
      } 
      
      
      var dataObj = {
        username : $scope.user.name,
        mail : $scope.user.email,
        message : $scope.user.message
      }

      var request = {
        method: 'POST',
        url: '/php/contact.php',
        data: dataObj
      }

      $http(request)
        .then(function(response){
          console.log(response)
        }, 
        function(response){
          console.error(response);
        });
    }

  }])
;






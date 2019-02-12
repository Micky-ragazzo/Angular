define( [
	'./properties',
	'./initialproperties',
	'text!./template.ng.html', 
	'jquery', 
	'text!extensions/com-qliktech-angularchart/template.html'
],
function ( props, initProps, ngTemplate ) {
	'use strict';

	return {
		definition: props,
		initialProperties: initProps,
		support: {snapshot: true},
		template: ngTemplate,
		controller: ['$scope', function ( $scope ) {
			$scope.myTitle = 'This is my AngularJS table';
		}],
	};
	
});

(function () {
  'use strict';

  angular
    .module('jobs.admin')
    .controller('JobsAdminController', JobsAdminController);

  JobsAdminController.$inject = ['$scope', '$state', '$window', 'jobResolve', 'Authentication'];

  function JobsAdminController($scope, $state, $window, job, Authentication) {
    var vm = this;

    vm.job = job;
    vm.authentication = Authentication;
    vm.error = null;
    vm.form = {};
    vm.remove = remove;
    vm.save = save;

    // Remove existing Job
    function remove() {
      if ($window.confirm('Are you sure you want to delete?')) {
        vm.job.$remove($state.go('admin.jobs.list'));
      }
    }

    // Save Job
    function save(isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.jobForm');
        return false;
      }

      // Create a new job, or update the current instance
      vm.job.createOrUpdate()
        .then(successCallback)
        .catch(errorCallback);

      function successCallback(res) {
        $state.go('admin.jobs.list'); // should we send the User to the list or the updated Job's view?
      }

      function errorCallback(res) {
        vm.error = res.data.message;
      }
    }
  }
}());

(function () {
    'use strict';

    angular.module('app.dashboard')
        .factory('Computer', ComputerModel);

    function ComputerModel () {
        class Computer {
            constructor(computer) {
                this.id = computer.id;
                this.name = computer.name;
                if(computer.introduced) {
                    this.introduced = new Date(computer.introduced);
                }
                if(computer.discontinued) {
                    this.discontinued = new Date(computer.discontinued);
                }
                if(computer.companyId) {
                    this.company = {};
                    this.company = new Company(computer.companyId, computer.companyName);
                }
            }

            toDTO() {
                let computer = {};
                computer.name = this.name;
                if(this.introduced) {
                    computer.introduced = this.introduced.toISOString().split('T')[0];
                }
                if(this.discontinued ){
                    computer.discontinued = this.discontinued.toISOString().split('T')[0];
                }
                if(this.company) {
                    computer.companyId = this.company.id;
                }
                return computer;
            }

        }

        class Company {
            constructor(id,name) {
                this.id = id;
                this.name = name;
            }
        }

        return Computer;
    }


})();

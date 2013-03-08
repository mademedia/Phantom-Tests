# Phantom Testing Platform

## Installing PhantomJS

There are two routes to installing PhantomJS on OS X, the easy way is to use 
homebrew, ex:

	brew update && brew install phantomjs

If you already have it installed make sure it's all up to date:

	brew update && brew upgrade phantomjs

## Creating a new test

Tests should all go inside a client specific directory, so for example, if 
AT&T PAC need tests, then create a directory called attpac/ and call that
using the phantom executable:

	phantomjs attpac/tests.js

## Running a pre-existing test

Any pre-existing (generic) tests can be run via the command line, any new
tests should be as generic as possible, so that they can work across everything.
So if at all possible, accept arguments from the command line for switches etc.

	phantomjs blocksoffice/tests.js http://tickets.attpac.site/app_dev.php/
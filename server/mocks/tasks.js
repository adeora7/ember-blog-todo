if (!Array.prototype.find) {
  Array.prototype.find = function(predicate) {
    if (this == null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
} 

 module.exports = function(app) {
  var express = require('express');
  var tasksRouter = express.Router();

  var tasks= [
      {
        id: 1,
        title: 'Bananas',
        body: 'EK kela roz ka kela'
      },
      {
        id: 2,
        title: 'Apples ',
        body: 'Apple a day.. doctor fucks away'
      },
      {
        id: 3,
        title: 'Peaches ',
        body: 'Pichaaa'
      }];

  tasksRouter.get('/', function(req, res) {
    res.send({
      'tasks': tasks
    });
  });

  tasksRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  tasksRouter.get('/:id', function(req, res) {
    res.send({
      'task': task.find(function(task){
        return task.id==req.params.id
      })
    });
  });

  tasksRouter.put('/:id', function(req, res) {
    res.send({
      'tasks': {
        id: req.params.id
      }
    });
  });

  tasksRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/tasks', tasksRouter);
};

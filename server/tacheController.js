const Tache = require('./tacheModel');

exports.createTache = (req, res, next) => {
  const tache = new Tache({
    shortDesc: req.body.shortDesc,
    longDesc: req.body.longDesc,
    dateEcheance: req.body.dateEcheance,
    etat: req.body.etat,
  });
  tache.save().then(
    () => {
      res.status(201).json({
        message: 'Post saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getOneTache = (req, res, next) => {
  Tache.findOne({
    _id: req.params.id
  }).then(
    (tache) => {
      res.status(200).json(tache);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyTache = (req, res, next) => {
   const tache = new Tache({
       shortDesc: req.body.shortDesc,
       longDesc: req.body.longDesc,
       dateEcheance: req.body.dateEcheance,
       etat: req.body.etat,
    });
  Tache.updateOne({_id: req.params.id}, tache).then(
    () => {
      res.status(201).json({
        message: 'Tache updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.deleteTache = (req, res, next) => {
  Tache.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getAll = (req, res, next) => {
  Tache.find().then(
    (taches) => {
      res.status(200).json(taches);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};
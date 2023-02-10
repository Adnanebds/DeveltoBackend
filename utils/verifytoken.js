import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

// verifyToken middleware function to verify if the token is present in the cookies and if it's valid
export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }
  // verify the token using the JWT environment variable
  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.user = user;
    next();
  });
};

// verifyUser middleware function to verify if the user trying to access the route is the same as the user in the token
export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};

// verifyVrijwilliger middleware function to verify if the user in the token has the role "vrijwilliger"
export const verifyVrijwilliger = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role !== "vrijwilliger") {
      return next(createError(403, "You are not authorized!"));
    }
    next();
  });
};

// verifyMagazijnMedewerker middleware function to verify if the user in the token has the role "magazijnmedewerker"
export const verifyMagazijnMedewerker = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role !== "magazijnmedewerker") {
      return next(createError(403, "You are not authorized!"));
    }
    next();
  });
};

// verifyAdmin middleware function to verify if the user in the token has the role "directie"
export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role !== "directie") {
      return next(createError(403, "You are not authorized!"));
    }
    next();
  });
};

//DMM stands for directie and magazijnmedewerker
export const verifyDMM= (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role !== "directie" && req.user.role !== "magazijnmedewerker") {
      return next(createError(403, "You are not authorized!"));
    }
    next();
  });
};

//DVW stands for directie and vrijwilliger
export const verifyDVW= (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role !== "directie" && req.user.role !== "vrijwilliger") {
      return next(createError(403, "You are not authorized!"));
    }
    next();
  });
};
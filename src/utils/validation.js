const Joi = require('joi');

exports.transactionQuerySchema = Joi.object({
    page: Joi.number().integer().min(1).optional(),
    limit: Joi.number().integer().min(1).optional(),
    startDate: Joi.number().optional(),
    endDate: Joi.number().optional(),
    type: Joi.string().valid('credit', 'debit').optional(),
});

exports.reportQuerySchema = Joi.object({
    startDate: Joi.number().optional(),
    endDate: Joi.number().optional(),
    type: Joi.string().valid('credit', 'debit').optional(),
});

exports.transactionSchema = Joi.object({
    type: Joi.string().valid('credit', 'debit').required(),
    invoice: Joi.string().required(),
    timestamp: Joi.number().required(),
    status: Joi.string().valid('pending', 'completed', 'failed').required(),
    mobile: Joi.string().pattern(/^\d{10}$/).required(),
});

exports.signupValidation = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

exports.loginValidation = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});
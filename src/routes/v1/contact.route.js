const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { contactValidation } = require('../../validations');
const { contactController } = require('../../controllers');

const router = express.Router();
router
  .route('/')
  .post(auth('contacts.manage'), validate(contactValidation.createContact), contactController.createContact);
module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Contacts
 *   description: Contact management and retrieval
 */

/**
 * @swagger
 * /contacts:
 *   post:
 *     summary: Create a contact
 *     description: Only users can create contacts.
 *     tags: [Contacts]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - fullName
 *               - emailAddress
 *               - phoneNumber
 *               - courseOfStudy
 *               - interestedCountry
 *               - hasUniversityInMind
 *               - budget
 *             properties:
 *               fullName:
 *                 type: string
 *               emailAddress:
 *                 type: string
 *               phoneNumber:
 *                 type: string
 *               courseOfStudy:
 *                  type: string
 *               interestedCountry
 *                  type: string
 *               hasUniversityInMind
 *                  type: string
 *               budget
 *                  type: string
 *             example:
 *               name: fake name
 *               emailAddress: fake@example.com
 *               phoneNumber: +2349076858761
 *               courseOfStudy: computer science
 *               interestedCountry: United Kingdom
 *               hasUniversityInMind: Birmiham University
 *               budget: 5000 dollars
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Contact'
 *       "400":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 */


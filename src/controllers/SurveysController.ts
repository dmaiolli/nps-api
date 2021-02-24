import { Request, Response } from 'express';
import { SurveysRepository } from '../repositories/SurveysRepository';
import { getCustomRepository } from 'typeorm';
import { Survey } from '../models/Survey';

class SurveysController {
  async create(request: Request, response: Response){
    const { title, description } = request.body;

    const surveysRepository = getCustomRepository(SurveysRepository); 

    const survey = surveysRepository.create({
      title,
      description
    })

    await surveysRepository.save(survey);

    return response.status(200).json(survey);
  }

  async show(request: Request, response: Response) {
    const surveysRepository = getCustomRepository(SurveysRepository);

    const all = await surveysRepository.find();

    return response.status(200).json(all)
  }
}

export { SurveysController }
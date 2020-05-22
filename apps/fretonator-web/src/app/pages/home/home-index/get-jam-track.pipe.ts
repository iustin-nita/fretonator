import { Pipe, PipeTransform } from '@angular/core';
import { GenerateFretMapService } from '../../../common/generate-fret-map/generate-fret-map.service';
import { JamTrack, Mode, NoteObject } from '../../../util/types';

@Pipe({
  name: 'getJamTrack',
})
export class GetJamTrackPipe implements PipeTransform {
  constructor(public generateFretMapService: GenerateFretMapService) {}

  transform(note: NoteObject, mode: Mode): JamTrack | false {
    return this.generateFretMapService.getJamTrack(note, mode);
  }
}

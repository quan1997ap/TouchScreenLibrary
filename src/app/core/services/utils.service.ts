import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable()
export class UtilsService {

  constructor(private http: HttpClient) { }

  /**
   * track by function use in for loop
   * @param index
   * @param item
   */
  trackByFn(index, item) {
    return item.id;
  }

  /**
   * update model to server
   * @param actionDetail
   * @param modelCode
   * @param modelData
   * @param sortData
   * @param pagesize
   * @param pageindex
   * @param projection
   */
  updateModelToServer(actionDetail: string, modelCode: string, modelData: any,
        sortData?: any, pagesize?: string, pageindex?: string, projection?: any ) {
		const para = {
			'code': modelCode,
			'param': modelData
		};
		if( sortData ){ para['sort'] = sortData };
		if( pagesize ){ para['pagesize'] = pagesize };
		if( pageindex ){ para['pageindex'] = pageindex };
		if( projection ){ para['projection'] = projection };

		// update to server
		return this.http.post('public/' + actionDetail, para).pipe(map(data => {
			const schemaData = JSON.parse(JSON.stringify(data));
			if (schemaData.PHHAPI.header.code === '0') {
				// success -->
				return schemaData.PHHAPI.body;
			} else {
				throw new Error(schemaData.PHHAPI.body);
			}
		}), catchError(error => {
			return throwError(error);
		}));
  }

  /**
   * search model data
   * @param modelCode
   * @param modelData
   * @param orderData
   * @param pagesize
   * @param pageindex
   * @param projection
   */
  searchModelData(modelCode: string, modelData: any, orderData?: any, pagesize?: string, pageindex?: string, projection?: any) {
		return this.updateModelToServer('search', modelCode, modelData, orderData, pagesize, pageindex, projection);
	}
}

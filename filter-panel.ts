import {Component, OnInit, ViewChild}		from '@angular/core';
import {NgChosen}												from 'modules/ng-chosen/ng-chosen';
import {StratDataService}								from 'modules/strat.data.service/strat.data.service';

@Component({
	selector:					'filter-panel',
	template:					`
		<div class="filter-panel"><ng-chosen *ngFor="let select of selects" [config]="select" [options]="select.options"></ng-chosen></div>
	`,
	directives:				[NgChosen],
	styles:						[`
		.filter-panel {padding-top: 10px;}
	`]
})

export class FilterPanel implements OnInit {
	@ViewChild(NgChosen) chosen: NgChosen;
	selects = [
		{
			label: "Issues",
			placeholder_text_multiple: "Select Issues",
			stop: true;
		},
		{
			label: "Reporters",
			placeholder_text_multiple: "Select Reporters"
		},
		{
			label: "Publications",
			placeholder_text_multiple: "Select Publications"
		},
		{
			label: "Targets",
			placeholder_text_multiple: "Select Targets"
		},
		{
			label: "Clients",
			placeholder_text_multiple: "Select Clients"
		}
	]
	
	constructor(private data: StratDataService) {
		this.data = data;
	}
	
	ngOnInit() {
		this.data.getOptions().subscribe(res => {
			this.selects[0].options = res.Issue;
			this.selects[1].options = res.Reporter;
			this.selects[2].options = res.Source_Publication;
			this.selects[3].options = res.Research_Subject;
			this.selects[4].options = res.Client;
		});
	}
}
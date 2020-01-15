import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from '../../shared/posts.service';
import {Subscription} from 'rxjs';
import {Post} from '../../shared/interfaces';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  pSub: Subscription;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.pSub = this.postsService.getAll().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  remove(id: string) {
  }

  ngOnDestroy(): void {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
  }
}

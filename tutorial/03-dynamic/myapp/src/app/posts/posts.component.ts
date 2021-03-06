import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';
import { BlogService, IPostModel } from '../core/blog.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  postModel: IPostModel;
  postCover: string;
  constructor(private blogService: BlogService, private route: ActivatedRoute) { }

  ngOnInit() {
    var slug = this.route.snapshot.paramMap.get('slug');
    this.blogService.getPost(slug).subscribe(
      result => { 
        this.postModel = result;
        this.postCover = environment.apiEndpoint + '/' + this.postModel.post.cover;
      }
    );
  }
}
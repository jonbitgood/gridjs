import { h } from 'preact';

import Config from '../config';
import { BaseComponent } from './base';
import className from '../util/className';
import { Search } from './plugin/search';

import '../theme/mermaid/head.scss';

export class HeaderContainer extends BaseComponent<{}, {}> {
  render() {
    return (
      <div className={className('head')}>
        <Search {...Config.current.search} />
      </div>
    );
  }
}